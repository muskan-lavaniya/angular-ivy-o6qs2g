import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  firstShipmentObj: any = [
    {
      shipmentNumber: '6183526272727',
      origin: 'SIN',
      destination: 'DEL',
      pieces: 1,
      weight: 4.6,
      remarks: 'Nothing',
    },
    {
      shipmentNumber: '6183526272728',
      origin: 'SIN',
      destination: 'BLR',
      pieces: 1,
      weight: 6.7,
      remarks: 'Nothing',
    },
    {
      shipmentNumber: '6183526272729',
      origin: 'SIN',
      destination: 'PAT',
      pieces: 1,
      weight: 9.7,
      remarks: 'Nothing',
    },
    {
      shipmentNumber: '6183526272710',
      origin: 'SIN',
      destination: 'KOL',
      pieces: 1,
      weight: 3.5,
      remarks: 'Nothing',
    },
  ];
  flightdata: any;
  headElements: any;
  constructor() {}
  flightForm = new FormGroup({
    flight: new FormControl(),
    date: new FormControl(),
    flightArray: new FormArray([]),
  });
  ngOnInit() {
    this.headElements = new Array();
    this.headElements.push('Shipment Number');
    this.headElements.push('Origin');
    this.headElements.push('Destination');
    this.headElements.push('Pieces');
    this.headElements.push('Weight');
    this.headElements.push('Remarks');
  }

  getFlightData() {
    let lengthOfTheList = this.firstShipmentObj.length;
    this.makeFormCOntrols(lengthOfTheList);
    this.flightForm.get('flightArray').patchValue(this.firstShipmentObj);
  }

  makeFormCOntrols(length) {
    let variants: any = this.flightForm.get('flightArray') as FormArray;
    variants.controls = [];
    for (let i = 0; i < length; i++) {
      variants.push(this.formControls());
    }
  }
  formControls() {
    return new FormGroup({
      shipmentNumber: new FormControl(),
      origin: new FormControl(),
      destination: new FormControl(),
      pieces: new FormControl(),
      weight: new FormControl(),
      remarks: new FormControl(),
    });
  }
}
