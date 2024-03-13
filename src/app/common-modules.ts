import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";

export const MAT_MODULES = [
  MatCardModule, 
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSidenav
    
];

export const COMMON_MODULES = [
  CommonModule,
]