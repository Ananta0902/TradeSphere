function Hero() {
    return ( 
        <div  style={{ height: "220px",backgroundColor:"#f6f6f6" }}>
            <div className="container m-5 p-5">
                <div className="d-flex align-items-center justify-content-between  mt-3">
                    <h2>Support Portal</h2>
                    <button className="btn btn-primary">  My Tickets </button>
                </div>
                <div className="input-group mt-4">
    <span className="input-group-text bg-transparent ">
       <i class="fa-solid fa-magnifying-glass"></i>
    </span>
    <input
        type="text"
        className="form-control"
        placeholder="Eg.How do I open my account,how do I deactivate F&O.."
    />
</div>
   </div>
        </div>
    );
}

export default Hero;

