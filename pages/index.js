import Skills from "../components/Skills";
import Projects from "../components/Projects";
import UserInfo from "../components/UserInfo";
import Education from "../components/Education";
import Head from "next/head";
import Contact from "../components/Contact";
import axios from "axios";

export default function Home({userInfo, skills, projects, formalEducation, onlineEducation, contactDetails}) {
    return (
        <>
            <Head>
                <title>Hitesh Meta</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <UserInfo userInfo={userInfo}/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Education formalEducation={formalEducation} onlineEducation={onlineEducation}/>
            <Contact contactDetails={contactDetails}/>
        </>
    )
}

export async function getStaticProps() {

    let profileInfo, skillInfo, projectInfo, formalEduInfo, onlineEduInfo, contactInfo

    try {
        await axios.get(`${process.env.API_HOST}/user-info`).then((response) => {
            profileInfo = response.data
        })
    } catch (error) {
        profileInfo = null
    }

    try {
        await axios.get(`${process.env.API_HOST}/skills`).then((response) => {
            skillInfo = response.data
        })
    } catch (error) {
        skillInfo = null
    }

    try {
        await axios.get(`${process.env.API_HOST}/projects`).then((response) => {
            projectInfo = response.data
        })
    } catch (error) {
        projectInfo = null
    }

    try {
        await axios.get(`${process.env.API_HOST}/formal-education`).then((response) => {
            formalEduInfo = response.data
        })
    } catch (error) {
        formalEduInfo = null
    }

    try {
        await axios.get(`${process.env.API_HOST}/online-education-and-courses`).then((response) => {
            onlineEduInfo = response.data
        })
    } catch (error) {
        onlineEduInfo = null
    }

    try {
        await axios.get(`${process.env.API_HOST}/contact`).then((response) => {
            contactInfo = response.data
        })
    } catch (error) {
        contactInfo = null
    }


    return {
        props: {
            userInfo: profileInfo,
            skills: skillInfo,
            projects: projectInfo,
            formalEducation: formalEduInfo,
            onlineEducation: onlineEduInfo,
            contactDetails: contactInfo
        },
    }
}
