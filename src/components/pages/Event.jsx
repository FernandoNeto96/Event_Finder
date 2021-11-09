import { Button, Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicButtons, { SecundaryButtons } from "../buttons/buttons";
import ButtonAppBar from "../navbar/navbar";
import api from "../../services/api";

///
const getEvent = async (id) => {
    const { data } = await api.get(`/get-events/${id}`, { withCredentials: true });
    return data;
}

const getQr = async (id) => {
    const { data } = await api.get(`get-events/${id}/generate-qrcode`, { withCredentials: true });
    console.log(data)
    return data;
}

const Event = () => {
    const params = useParams()
    const id = params.id

    const [filtered, setFiltered] = useState([]);
    const [qrCode, setQrCode] = useState("");
    const [apareceQr,SetApareceQr ] = useState(false);


    useEffect(() => {
        (async () => {
            setFiltered(await getEvent(id))


        })();
    }, []);

    async function QrRender() { 
        
        SetApareceQr(!apareceQr)
        console.log(apareceQr)
        setQrCode(await getQr(id))
       
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundColor: '#fdfdfc' }}>
                <ButtonAppBar />
                <h1 style={{ marginTop: "50px", marginLeft: "50px" }}>{filtered.title}</h1>
                {apareceQr?<img style={{ marginTop: "50px", marginLeft: "50px", height: 200, right: 100 }} src={qrCode} alt="Qr" />:""}
                <img style={{ marginTop: "50px", marginLeft: "50px", height: 200, right: 100 }} src={filtered.img} alt="Minha Figura" />
                <p style={{ marginTop: "50px", marginLeft: "50px" }}>{filtered.description}</p>

                <p style={{ marginTop: "50px", marginLeft: "50px" }}>Data:{filtered.date}</p>
                <p style={{ marginTop: "50px", marginLeft: "50px" }}>Hora:{filtered.time}</p>

                <Container maxWidth="lg" >
                    <Button onClick={() => QrRender()}  variant="contained">{apareceQr?"Cancelar presença":"confirmar presença"}</Button> 
                    <SecundaryButtons title={"Voltar"} redirect ={"home"} />
                </Container>


            </Box>

        </>
    )

}

export default Event