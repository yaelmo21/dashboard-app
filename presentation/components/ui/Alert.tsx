import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';
import clsx from 'clsx';

type AlertType = 'success' | 'error' | 'warning' | 'info';

const ICONS = {
  success: FaCheckCircle,
  error: FaExclamationCircle,
  warning: FaExclamationTriangle,
  info: FaInfoCircle,
};

const COLORS = {
  success: {
    bg: 'bg-green-50',
    icon: 'text-green-500',
    title: 'text-green-800',
    text: 'text-green-700',
    button:
      'hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50',
  },
  error: {
    bg: 'bg-red-50',
    icon: 'text-red-500',
    title: 'text-red-800',
    text: 'text-red-700',
    button: 'hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50',
  },
  warning: {
    bg: 'bg-yellow-50',
    icon: 'text-yellow-500',
    title: 'text-yellow-800',
    text: 'text-yellow-700',
    button:
      'hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50',
  },
  info: {
    bg: 'bg-blue-50',
    icon: 'text-blue-500',
    title: 'text-blue-800',
    text: 'text-blue-700',
    button: 'hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50',
  },
};

interface AlertProps {
  type: AlertType;
  title?: string;
  message: string | React.ReactNode;
  actions?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Alert = ({
  type,
  title,
  message,
  actions,
  dismissible = false,
  onDismiss,
}: AlertProps) => {
  const Icon = ICONS[type];
  const color = COLORS[type];

  return (
    <div className={clsx('rounded-md p-4', color.bg)}>
      <div className='flex items-start'>
        <div className='shrink-0 pt-1'>
          <Icon
            className={clsx('text-lg', color.icon)}
            aria-hidden='true'
          />
        </div>
        <div className='ml-3 flex-1'>
          {title && (
            <h3 className={clsx('text-sm font-medium', color.title)}>
              {title}
            </h3>
          )}
          <div className={clsx('mt-1 text-sm', color.text)}>{message}</div>
          {actions && <div className='mt-4 flex gap-2'>{actions}</div>}
        </div>
        {dismissible && (
          <div className='ml-auto pl-3'>
            <button
              type='button'
              onClick={onDismiss}
              className={clsx(
                'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2',
                color.button,
                color.icon,
              )}
            >
              <span className='sr-only'>Dismiss</span>
              <FaTimes className='text-sm' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
