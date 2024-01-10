import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  tasks: Task[] = [];
  loading = true;
  loadingMore = false;
  currentPage = 1;

  // Create Task
  showCreateForm = false;
  creating = false;
  newTask = { title: '', description: '', dueDate: '' };
  showEditModal = false;
  editTask: any = {};
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.taskService.getMyTasks(this.currentPage).subscribe({
      next: (data) => {
        this.tasks = data || [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
  openEdit(task: Task): void {
    this.editTask = {
      id: task.id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
    };
    this.showEditModal = true;
  }

  closeEdit(): void {
    this.showEditModal = false;
  }

  updateTask(): void {
    this.taskService
      .updateTask(this.editTask.id, {
        title: this.editTask.title,
        description: this.editTask.description,
        dueDate: this.editTask.dueDate,
      })
      .subscribe({
        next: (updatedTask) => {
          this.showEditModal = false;

          // Update task in-place
          const index = this.tasks.findIndex((t) => t.id === this.editTask.id);
          if (index !== -1) {
            this.tasks[index] = {
              ...this.tasks[index],
              ...this.editTask,
            };
          }
        },
        error: (err) => console.error(err),
      });
  }

  loadMoreTasks(): void {
    this.loadingMore = true;
    this.currentPage++;
    this.taskService.getMyTasks(this.currentPage).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.tasks = [...this.tasks, ...data]; // append new tasks
        } else {
          this.currentPage--; // revert if no new data
        }
        this.loadingMore = false;
      },
      error: (err) => {
        console.error(err);
        this.currentPage--;
        this.loadingMore = false;
      },
    });
  }

  // Detect scroll to bottom
  onScroll(event: any): void {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.loadMoreTasks();
    }
  }

  toggleStatus(task: Task): void {
    this.taskService.updateTaskStatus(task.id, !task.isCompleted).subscribe({
      next: () => (task.isCompleted = !task.isCompleted),
      error: (err) => console.error('Status update failed', err),
    });
  }

  get inProgressCount(): number {
    return this.tasks.filter((t) => !t.isCompleted).length;
  }

  get completedCount(): number {
    return this.tasks.filter((t) => t.isCompleted).length;
  }

  // Create Task
  openCreateForm(): void {
    this.showCreateForm = true;
  }

  closeCreateForm(): void {
    this.showCreateForm = false;
    this.newTask = { title: '', description: '', dueDate: '' };
  }

  createTask(): void {
    if (!this.newTask.title || !this.newTask.dueDate) return;

    this.creating = true;
    this.taskService.createTask(this.newTask).subscribe({
      next: () => {
        this.creating = false;
        this.closeCreateForm();
        this.tasks = [];
        this.currentPage = 1;
        this.loadTasks(); // reload first page
      },
      error: (err) => {
        console.error(err);
        this.creating = false;
      },
    });
  }
}
