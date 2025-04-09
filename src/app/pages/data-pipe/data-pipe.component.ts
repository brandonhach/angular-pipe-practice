import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-pipe',
  imports: [CommonModule],
  templateUrl: './data-pipe.component.html',
  styleUrl: './data-pipe.component.css',
})
export class DataPipeComponent {
  balance = '1200';
  today = new Date().toDateString();
  transactions = [
    {
      date: '2025-01-01',
      amount: 40,
    },
    {
      date: '2025-01-02',
      amount: 50,
    },
    {
      date: '2025-01-03',
      amount: 30,
    },
    {
      date: '2025-01-04',
      amount: 45,
    },
    {
      date: '2025-01-05',
      amount: 55,
    },
    {
      date: '2025-01-06',
      amount: 20,
    },
    {
      date: '2025-01-07',
      amount: 60,
    },
    {
      date: '2025-01-08',
      amount: 35,
    },
    {
      date: '2025-01-09',
      amount: 48,
    },
    {
      date: '2025-01-10',
      amount: 58,
    },
  ];
}
