import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3 custom-nav-item" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Consulting Firm</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/benchprofiles">BenchProfiles</Nav.Link>
                        <Nav.Link href="/dailysubmissions">Daily Submissions</Nav.Link>
                        <Nav.Link href="/interviews">Interviews</Nav.Link>
                        <Nav.Link href="/placements">Placements</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent