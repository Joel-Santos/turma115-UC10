import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LivroService from '../../services/livroService'; // Importa os serviços para adicionar e atualizar livros

const BookForm = ({ livroEdit }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano_publicacao, setAnoPublicacao] = useState('');
  const [genero, setGenero] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();

  const generos= [
    "Romance",
    "Ficção Científica",
    "Fantasia",
    "Mistério",
    "Suspense",
    "Terror",
    "Aventura",
    "Drama",
    "Histórico",
    "Biografia",
    "Autobiografia",
    "Poesia",
    "Humor",
    "Literatura Clássica",
    "Literatura Contemporânea",
    "Infantojuvenil",
    "Young Adult (YA)",
    "Distopia",
    "Realismo Mágico",
    "Crônicas",
    "Ensaios",
    "Autoajuda",
    "Espiritualidade",
    "Religião",
    "Filosofia",
    "Psicologia",
    "Ciências Sociais",
    "Política",
    "Economia",
    "Educação",
    "Tecnologia",
    "Negócios",
    "Direito",
    "Medicina",
    "Ecologia",
    "Viagens",
    "Gastronomia",
    "Arte",
    "Fotografia"
];

  useEffect(() => {
    if (livroEdit) {
      setTitulo(livroEdit.titulo);
      setAutor(livroEdit.autor);
      setAnoPublicacao(livroEdit.ano_publicacao);
      setGenero(livroEdit.genero);
      setPreco(livroEdit.preco);
    }
  }, [livroEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const livro = {
      titulo,
      autor,
      ano_publicacao: parseInt(ano_publicacao),
      genero,
      preco: parseFloat(preco)
    };

    try {
      if (livroEdit) {
        await LivroService.updateLivro(livroEdit.id, livro); // Atualizar livro
      } else {
       
        await LivroService.addLivro(livro); // Criar novo livro
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <input 
        type="text" 
        placeholder="Título" 
        name="titulo"
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input 
        type="text"
        name="autor" 
        placeholder="Autor" 
        value={autor} 
        onChange={(e) => setAutor(e.target.value)} 
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input 
        type="number" 
        name="ano_publicacao"
        placeholder="Ano de Publicação" 
        value={ano_publicacao} 
        onChange={(e) => setAnoPublicacao(e.target.value)} 
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select 
        value={genero} 
        name="genero"
        onChange={(e) => setGenero(e.target.value)} 
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        {generos.map((gen, index) => (
          <option key={index} value={gen}>{gen}</option>
        ))}
      </select>
      <input 
        type="number" 
        name="preco"
        placeholder="Preço" 
        value={preco} 
        onChange={(e) => setPreco(e.target.value)} 
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button 
        type="submit" 
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {livroEdit ? 'Atualizar Livro' : 'Adicionar Livro'}
      </button>
    </form>
  );
};

export default BookForm;
