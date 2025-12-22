import './Loading.css';
import { useTranslation } from "react-i18next";

const Loading = () => {

    const { t } = useTranslation();

    return (
    <>
      <div className="loading-bar">{t('loading.message')}</div>
    </>
  );
}

export default Loading;