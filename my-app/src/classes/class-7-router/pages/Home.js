import { Button, Container, Typography } from "@mui/material";

const Home = () => {
    return (
        <Container style={{marginTop: '2rem', textAlign: 'center'}}>
            <Typography variant="=h2">
                Welcome to My Website
            </Typography>
            <Typography variant="body1" paragraph>
                This is an attractive and responsive website. This is an attractive and responsive website.
            </Typography>
            <Button variant="contained" color="primary">
                Learn More
            </Button>
        </Container>
    )
}
export default Home;