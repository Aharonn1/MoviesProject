import { NavLink, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer(): JSX.Element {



    return (
        <div className="Footer">
            <div className="follow">
            <h3>עקבו אחרינו</h3>
            <a href="https://www.facebook.com/Planetcinemail">פיסבוק</a>
            <br />
            <a href="https://www.instagram.com/planetcinema_il/">אינסטגרם</a>
            <br />
            <a href="https://www.tiktok.com/@planetcinema_il?_t=8aJD28TX5LG&_r=1">טיקטוק</a>
            <br />
            </div>
             <div className="talk">
            <h3>דברו איתנו</h3>
            <a href="https://www.planetcinema.co.il/contact">צרו קשר במייל</a>
            <br />
            <a href="https://www.planetcinema.co.il/static/iw/il/service">שירות לקוחות</a>
            </div>

            
            <div className="links">
                <h3>להורדת אפליקציה</h3>
                <a href="https://play.google.com/store/apps/details?id=com.internetbee.yesplanet">אנדרואיד</a>
                <br />
                <a href="https://apps.apple.com/us/app/yesplanet/id411672262">iOS</a>
            </div>

        </div>
    );
}

export default Footer;
