import PageTitle from "../PageTitle.tsx";
export default function References(){
    return (
        <section>
            <PageTitle page="References" />
            <h2>References</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Relation</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Eva Chen</td>
                    <td>Mother</td>
                    <td>86-13788906091</td>
                </tr>
                <tr>
                    <td>Tate Liu</td>
                    <td>Father</td>
                    <td>86-13917664262</td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}