function Card({username, btnText = 'Visit me!'}){


    return (
        <div className="card d-flex flex-row w-50">
            <div>
                <img src="https://wallpapers.com/images/hd/toge-inumaki-anime-pfp-45xkw9of4fyj2fcx.jpg" className="img-fluid rounded-start" alt="card_img"/>
            </div>
            <div className="mx-auto">
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className="btn btn-primary">{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;