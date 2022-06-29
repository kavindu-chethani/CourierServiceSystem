
<div ref={componentRef}>
                        <div class="viewPContainer">
                           
                            <form action="#">
                                <div class="form first">
                                    <div class="details personal">
                                        <span class="title">Customer & Package Details</span>

                                        <div class="fields">
                                            <div class="input-field">
                                                <label>First Name</label>
                                                <input name="cusFirstName" type="text"  value={packagePDF.cusFirstName}   required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Last Name</label>
                                                <input name="cusLastName" type="text"  value={packagePDF.cusLastName}  required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Email</label>
                                                <input name="cusEmail" type="text"  value={packagePDF.cusEmail}   required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Address</label>
                                                <input name="cusAddress" type="text"  value={packagePDF.cusAddress} required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Mobile Number</label>
                                                <input name="cusConNumber" type="text"  value={packagePDF.cusConNumber}  required/>
                                            </div>
                                            
                                            <div class="input-field">
                                                <label>Package Location</label>
                                                <input name="pacLocation" type="text"  value={packagePDF.pacLocation}  required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Package Type</label>
                                                <input name="pacType" type="text"  value={packagePDF.pacType}  required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Estimated Date</label>
                                                <input name="EsstimatedDate" type="text"  value={packagePDF.pacEsstimatedDate}   required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Package weight</label>
                                                <input name="pacWeight" type="text"  value={packagePDF.pacWeight} required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="details ID">
                                        <span class="title">Shop Details</span>

                                        <div class="fields">
                                            <div class="input-field">
                                                <label>Shop Name</label>
                                                <input name="shopName" type="text"  value={packagePDF.shopName}  required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Pickup Date</label>
                                                <input name="shopPickUpDate" type="text"  value={packagePDF.shopPickUpDate} required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Shop Contact</label>
                                                <input name="shopConNumber" type="text"  value={packagePDF.shopConNumber}  required/>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="details ID">
                                        <span class="title">Delivery Details</span>

                                        <div class="fields">
                                            <div class="input-field">
                                                <label>Deliver By</label>
                                                <input name="dvName" type="text" value={packagePDF.dvName}   required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Vehicle Number</label>
                                                <input name="dvVehicalNumber" type="text"  value={packagePDF.dvVehicalNumber}  required/>
                                            </div>

                                            <div class="input-field">
                                                <label>Delivery Person ID</label>
                                                <input name="dvNIC" type="text"  value={packagePDF.dvNIC}  required/>
                                            </div>
                                        </div>
                                    </div> 
                                
                                </div>

                            
                            </form>
                        </div>
                    </div> 