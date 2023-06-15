import MainLayout from "../Layouts/MainLayout";
import '../Styles/page.css';

export default function About() {
    return(
        <MainLayout>
            <div id="about">
                <h1>About Project</h1><hr/>
                <h3>Cook Book App</h3>
                <p>Welcome to Hearty Meal! We are a team of aspiring web developers who are passionate 
                    about coding and committed to learning and growing in the exciting world of web 
                    development.<br/>
                    We embarked on this journey with a shared enthusiasm for web development, eager to 
                    explore its possibilities and contribute our unique perspectives. We believe that 
                    through continuous learning and hands-on experience, we can bring innovation and 
                    creativity to the digital realm.<br/>
                    Our Cook Book is built using ReactJS. To ensure that our content is always up-to-date 
                    and easily manageable, we have integrated Contentful into our website. Contentful is 
                    a flexible and user-friendly content management system (CMS) that allows us to 
                    effortlessly update and publish new menu items, promotions, and blog posts.<br/>
                    Through this project, we not only aim to provide you with a seamless online experience 
                    but also showcase our growth as web developers. Join us on this exciting journey as we 
                    combine our love for coding with our passion for delivering exceptional user experiences.<br/>
                    Thank you for visiting Hearty Meal, and we hope you enjoy exploring our website as much 
                    as we enjoyed creating it!
                </p>
                                  
                <div>
                    <h3>Author:</h3>
                    <p>Anh Chau <a href='https://github.com/anh-8922' target='_blank'>GitHub</a></p>
                    <p>Lakmali Ranatunga <a href='https://github.com/lranatunga' target='_blank'>GitHub</a></p>
                    <h6>Source Code: <a href="https://github.com/anh-8922/hearty-meal">GitHub</a></h6>
                </div>

            </div>
        </MainLayout>
    )
}