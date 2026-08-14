import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle mono"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
    >
      <span className="theme-toggle__label">theme</span>
      <span className="theme-toggle__track">
        <span
          className={
            'theme-toggle__thumb' +
            (isDark ? ' theme-toggle__thumb--on' : '')
          }
        />
      </span>
      <span className="theme-toggle__value">{isDark ? 'dark' : 'light'}</span>
    </button>
  );
}
