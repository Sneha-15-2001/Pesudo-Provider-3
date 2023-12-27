import { Component } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jioadmin',
  templateUrl: './jioadmin.component.html',
  styleUrls: ['./jioadmin.component.css']
})
export class JioadminComponent {
  providerName: string = 'Jio'; // Default provider name for this component
  inventoryData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    
     
      this.fetchInventoryData(this.providerName);
    
  }

  increaseInventoryForProvider() {
    console.log(this.providerName);
    this.inventoryService.increaseInventory(this.providerName).subscribe(
      response => {
        console.log('Inventory increased for', this.providerName, response);
        this.fetchInventoryData(this.providerName); // Fetch updated inventory data
        // Handle success response
      },
      error => {
        console.error('Error increasing inventory for', this.providerName, error);
        // Handle error response
      }
    );
  }

  fetchInventoryData(providerName: string) {
    this.inventoryService.getInventoryDataByProvider(providerName).subscribe(
      data => {
        this.inventoryData = data;
        console.log('Inventory data for', providerName, this.inventoryData);
        // Handle successful data retrieval
      },
      error => {
        console.error('Error fetching inventory data for', providerName, error);
        // Handle error response
      }
    );
  }
}

