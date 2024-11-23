import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Analysis.css';
import BodyImage from '../assets/Cuerpo.png';

const Analysis = () => {
    return (
        <div className="analysis-container">
            <div className="analysis-box">
                {/* Title */}
                <h2 className="analysis-title">Preliminary Analysis</h2>

                {/* Content Section */}
                <div className="content-section">
                    {/* Body Image */}
                    <div className="body-section">
                        <img src={BodyImage} alt="Body" className="body-image" />
                    </div>

                    {/* Measurements */}
                    <div className="measurements-section">
                        <ul className="measurements-list">
                            {[0, 1, 2, 3, 4].map((_, index) => (
                                <li key={index} className="measurement-item">
                                    <div className="measurement-icon">🌡️</div>
                                    <span className="measurement-value">0*</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Buttons */}
                <div className="buttons-section">
                    <button className="start-button">Iniciar</button>
                    <button className="stop-button">Detener</button>
                    <button className="next-button">Siguiente</button>
                </div>
            </div>

            {/* Circular button to navigate to statistics */}
            <Link to="/estadisticas" className="stats-button">
                📊
            </Link>
        </div>
    );
};

export default Analysis;
