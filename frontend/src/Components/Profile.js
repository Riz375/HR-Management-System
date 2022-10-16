
function Profile() {

    return (
        <div>
            <div class="page-content">

                <div class="dBoxes">
                    <h2>Personal</h2>
                    <div class="roles-box">
                        <p>Full Name: John Smith </p>
                        <p>Age: 22 </p>
                        <p>contact number: 01234 567890 </p>
                    </div>
                </div>
                <div class="dBoxes">
                    <h2>Proffessional</h2>
                    <div class="roles-box">
                        < p class="role-weight" >Personal</p>
                        <p>Department: Sales </p>
                        <p>Job Title: Sales Manager </p>
                        <p>Employee ID: 101606 </p>
                        <p>Manager ID: 249871 </p>
                    </div>
                </div>
                <div class="dBoxes">
                    <h2>Qualifications</h2>
                    <div class="roles-box">
                        <p class="role-weight" >Personal</p>
                        <p>Current Qualification: </p>
                        <select name="curQual">
                            <option disabled>AWS Cloud Practitioner</option>
                            <option disabled>AWS Developer Associate</option>
                            <option disabled>AWS Solutions Architect</option>
                            <option disabled>Microsoft Cybersecurity Architect</option>
                            <option disabled selected>Project Management</option>
                        </select>
                        <br></br>
                        <p>Qualifications completed: </p>
                        <select>
                            <option>AWS Cloud Practitioner</option>
                            <option>AWS Developer Associate</option>
                            <option>AWS Solutions Architect</option>
                            <option selected>Microsoft Cybersecurity Architect</option>
                            <option>Project Management</option>
                        </select>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Profile