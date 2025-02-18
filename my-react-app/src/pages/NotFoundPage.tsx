import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2>404 - Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/products" className="back-button">
        Вернуться к товарам
      </Link>
    </div>
  );
};

export default NotFoundPage; 