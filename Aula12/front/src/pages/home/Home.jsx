import { useEffect, useState } from 'react';
import LivroService from '../../services/livroService';
import BookCard from '../../components/bookcard/BookCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const data = await LivroService.getAllLivros();
        setLivros(data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };
    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    try {
      await LivroService.deleteLivro(id);
      setLivros(livros.filter((livro) => livro.id !== id));
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  const handleEdit = async (id) => {
    navigate(`/livro/editar/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <button 
        onClick={() => navigate('/livro/adicionar')} 
        className="mb-6 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Adicionar Livro
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {livros.map((livro) => (
          <BookCard key={livro.id} livro={livro} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default Home;
