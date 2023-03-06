export default function PageTitle(pageName) {
    return (
        <div className="page-title-spacer">
            <div className='page-title-text'>
                {pageName}
            </div>
        <style jsx>{`
            .page-title-spacer {
                margin-top: 10px;
                margin-bottom: 30px;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 90px;
                background-color: #370F7A;
            }
            .page-title-text {
                font-weight: 370;
                letter-spacing: 2px;
                display: felx;
                justify-content: center;
                color: white;
                font-size: 60px;
                align-items: center;    
                height: 100%
            }
        `}</style>
    </div>)
}