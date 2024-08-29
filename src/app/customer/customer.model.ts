
import{
     NgForm,
     FormGroup,
     FormControl,
     Validators,
     FormBuilder
} from '@angular/forms'

export class Customer {
     customerCode: String = "";
     customerName: String = "";
     amount: number = 0;

     formCustomerGroup: FormGroup;
     constructor(){
     
          var _builder = new FormBuilder();
          this.formCustomerGroup = _builder.group({});

          // Customer Name Validation
          this.formCustomerGroup.addControl("CustomerNameControl", 
               new FormControl('',Validators.required)
          );

          //Customer Code Validation
          // Required, 4 letter Numeric
          var codeValidationCollection = [];
          codeValidationCollection.push(Validators.required);
          codeValidationCollection.push(Validators.pattern("^[0-9]{4,4}$"));

          this.formCustomerGroup.addControl("CustomerCodeControl",
               new FormControl('',Validators.compose(codeValidationCollection))
          );
     }
}