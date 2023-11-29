import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const BeritaVideo = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="videoberitapage">
            <div className="video-berita min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">Semua Video Berita</h1>
                            <p className="text-center">Semua berita video tersedia di halaman ini</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                placeholder="Cari video berita..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="form-control mb-4"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default BeritaVideo