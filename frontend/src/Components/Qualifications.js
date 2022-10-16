
function Qualification () {

    return(
        <div> 
       <h1 id="page-title">Certification</h1>
       <div class="page-content">
        <div class="search-box">
            <input class="Search-txt" type="text" name="" placeholder=" Type to seaarch" />
            <a class="search-btn" href="#"></a>
            </div>
        <div class="dBoxes">
            <h2>Courses</h2>
                <div class="roles-box">
                    <p class="role-weight" ></p>
                <div class="wrapper">

                    <form class="form">
                <div class="inputBox">
                    <input type="text" placeholder="Add Certification" required />
                    <button><i class="fa fa-plus"></i></button>
                    </div>
                    </form>
                    
                <ul id="data">
                    <li><p>AWS Cloud Practitioner</p> <button><i class="fa fa-trash"></i></button></li>
                    <li><p>AWS Developer Associate</p> <button><i class="fa fa-trash"></i></button></li>
                    <li><p>AWS Solutions Architect</p> <button><i class="fa fa-trash"></i></button></li>
                    <li><p>Microsoft Cybersecurity Architect</p> <button><i class="fa fa-trash"></i></button></li>
                    <li><p>Project Management</p> <button><i class="fa fa-trash"></i></button></li>
                    </ul>
                <div class="footer">
                    <p>Total Task <span>5</span></p>
                    <button id="clear">Clear</button>

</div>

</div>

</div>

</div>
        </div>
        </div>
    )
}

export default Qualification