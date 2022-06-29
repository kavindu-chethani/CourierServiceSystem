const validation= (stores)=>{
	let errors={};
	if(!stores.store_Id){
	errors.store_Id="Store Id is required"
    }
	// }else if(![a-z].test(values.store_Id)){
	// errors.store_Id="Store Id is invalid"
	// }
	if(!stores.package_Id){
	errors.package_Id="package Id is required"
	}
	if(!stores.delivery_District){
	errors.delivery_District="delivery district is required"
	}
	if(!stores.weight){
	errors.weight="weight is required"
	}
    if(!stores.date){
        errors.date="date is required"
    }

return errors;
}
export default validation;