import Calculator from './Calculator.tsx'
import PageTitle from "../PageTitle.tsx";
export default function Projects() {
    return (
        <section>
            <main>
                <PageTitle page="Projects" />
                <h2>Projects</h2>
                <p>
                    Software Engineering Course Project: Pet Store Web Service Project Team Member
                    Apr.2025-May.2025
                    Project Aim: to develop a back-end service system of a pet store using the Flask framework and
                    SQLAlchemy ORM to provide users with functions such as registration, login, adding pets, and
                    browsing the pet list,
                    My Duties: wrote key back-end functions such as user authentication, data verification, and API
                    routing logic; completed the pet picture acquisition module and dynamically generated pictures for
                    pets using a third-party API (Dog CEO); wrote unit tests and end-to-end integration tests, used
                    pytest to ensure the system stability during continuous iterations, and achieved automated testing
                    to cover user operation paths,
                    Project Outcome: leveraged Docker to achieve consistent local and cloud deployment, deployed the
                    project on GitHub
                    <a href="https://github.com/SeaPolecat/411-pet-shop">(Link Here)</a>, and wrote detailed
                    documentation and user manuals to facilitate others' deployment, reproduction, and maintenance.


                </p>
                <Calculator/>
            </main>
        </section>
    )
}