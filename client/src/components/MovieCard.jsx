import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarIcon } from 'lucide-react';
import timeFormat from '../lib/timeFormat';
import { useAppContext } from '../context/AppContext';

const getReleaseYear = (releaseDate) => {
  if (!releaseDate) return 'Unknown';

  const date =
    typeof releaseDate === 'string' || typeof releaseDate === 'number'
      ? new Date(releaseDate)
      : releaseDate;

  return isNaN(date.getTime()) ? 'Unknown' : date.getFullYear();
};


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const {image_base_url} = useAppContext()

  console.log('release date:', movie.release_Date || movie.release_date);

  const handleNavigation = () => {
    navigate(`/movies/${movie._id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
      <img
        src={image_base_url + movie.backdrop_path}
        alt={movie.title || 'Movie Poster'}
        onClick={handleNavigation}
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />

      <p className="font-semibold mt-2 truncate">{movie.title}</p>

      <p className="text-sm text-gray-400 mt-2">
        {/* {new Date(movie.release_Date).getFullYear()} ·{' '} */}
        {getReleaseYear(movie.release_date || movie.release_Date)} ·{' '}
        {movie.genres.slice(0, 2).map((genre) => genre.name).join(' | ')} ·{' '}
        {timeFormat(movie.runtime)}
      </p>

      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          onClick={handleNavigation}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-md font-medium"
        >
          Buy Tickets
        </button>

        <p className="flex items-center gap-1 text-sm">
          <StarIcon className="w-4 h-4 text-primary fill-primary" />
          {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;  