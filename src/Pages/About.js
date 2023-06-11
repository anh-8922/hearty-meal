import MainLayout from "../Layouts/MainLayout";
import '../Styles/page.css';

export default function About() {
    return(
        <MainLayout>
            <div id="about">
                <h1>About Project</h1><hr/>
                <h3>Cook Book App</h3>
                <p>Our project is a dynamic and interactive application that leverages 
                        the power of APIs to fetch location IP data and present it in a visually 
                        appealing manner on a website. <br/>
                        The main objective of this project is to provide users with accurate and 
                        real-time information about the geographical location associated with an 
                        IP address. This includes details such as the country, region, city, 
                        latitude, longitude, and even additional data points like time zone.</p>
                <h3>Technical:</h3>
                    
                <div>
                    <h3>Author:</h3>
                    <p>Anh Chau <a href='https://github.com/anh-8922' target='_blank'>GitHub</a></p>
                    <p>Lakmali Ranatunga <a href='https://github.com/lranatunga' target='_blank'>GitHub</a></p>
                </div>

            </div>
        </MainLayout>
    )
}