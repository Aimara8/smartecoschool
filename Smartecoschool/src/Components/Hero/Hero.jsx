import React from 'react'
import './Hero.css'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.description')}</p>
            </div>
        </div>
    )
}

export default Hero