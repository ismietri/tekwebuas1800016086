import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-perpustakaan',
  templateUrl: './perpustakaan.component.html',
  styleUrls: ['./perpustakaan.component.css']
})
export class PerpustakaanComponent implements OnInit {

  constructor(
  public dialog: MatDialog,
  public api: ApiService
  ) {
  this.getData() }
perpus: any = []
  getData() {
    this.api.baca().subscribe(res => {
      this.perpus = res
    })
  }
  ngOnInit(): void {
  }
  buatBuku() {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog ditutup');
    });
  }
  editPerpus(data) {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getData()
    });
  }
  hapusPerpus(id) {
    console.log('data dihapus')
    this.api.hapus(id).subscribe(res => {
      this.getData()
    })
  }
  
}
