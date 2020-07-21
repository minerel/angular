import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss'],
  providers: [RestApiService],
})
export class EmployeesCreateComponent implements OnInit {
  public name: any;
  public email: any;
  public phone: any;

  private dataService: RestApiService;

  @Input() employeeDetails = { name: '', email: '', phone: 0 };

  constructor(public restApi: RestApiService, public router: Router) {}

  ngOnInit() {}

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list']);
    });
  }
}
