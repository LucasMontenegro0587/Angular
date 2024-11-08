import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from './models/index';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'createData', 'actions'];
  dataSource: User[] = [];

  isLoading = false;

  usuario = {
    nombre: 'Lucas Leonel',
    apellido: 'Montenegro Burgos',
  };

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onDelete(id: string) {
    if (confirm('¿Está seguro?')) {
      this.isLoading = true;
      this.usersService.removeUserById(id).subscribe({
        next: () => {
          this.loadUsers(); // Recarga los usuarios después de eliminar
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  goToDetail(id: string): void {
    this.router.navigate([id, 'detail'], {
      relativeTo: this.activatedRoute,
    });
  }

  openModal(editingUser?: User): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: { editingUser },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
              this.handleUpdate(editingUser.id, result);
            } else {
              this.usersService.createUser(result).subscribe({
                next: () => this.loadUsers(),
              });
            }
          }
        },
      });
  }

  handleUpdate(id: string, update: User): void {
    this.isLoading = true;
    this.usersService.updateUserById(id, update).subscribe({
      next: () => {
        this.loadUsers(); // Recarga usuarios después de la actualización
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}