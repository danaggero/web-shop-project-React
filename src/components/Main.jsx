import Card from "./products/MainProduct";
const mockData = [
    {
        title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
        subtitle: "Facilisi Viverra Dictum Augue Eu Lobortis Elit. In Et Donec Habitasse Lacus Mi Commodo Elementum."
    },
    {
        title: "Curabitur Non Nulla Sit Amet Nisl Tempus Convallis Quis Ac Lectus.",
        subtitle: "Vivamus Magna Justo, Lacinia Eget Congue Vel, Convallis At Tellus."
    },
    {
        title: "Pellentesque In Ipsum Id Orci Porta Dapibus.",
        subtitle: "Curabitur Aliquet Quam Id Duis Bibendum. Vivamus Suscipit Tortor Eget Felis Porttitor."
    },
    {
        title: "Nulla Quis Lorem Ut Libero Malesuada Feugiat.",
        subtitle: "Sed Porttitor Lectus Nibh. Curabitur Non Nulla Sit Amet Nisl Tempus Convallis."
    },
    {
        title: "Donec Sollicitudin Molestie Malesuada.",
        subtitle: "Curabitur Non Nulla Sit Amet Nisl Tempus Convallis Quis Ac Lectus."
    },
    {
        title: "Vestibulum Ac Diam Sit Amet Quam Vehicula Elementum.",
        subtitle: "Nulla Quis Lorem Ut Libero Malesuada Feugiat. Sed Porttitor Lectus Nibh."
    }
];

function Main() {
    return (
        <div className="mx-auto my-20" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px", justifyItems:"center" }}>
            {mockData.map((data, index) => (
                <Card key={index} title={data.title} subtitle={data.subtitle} />
            ))}
        </div>
    );
}

export default Main;