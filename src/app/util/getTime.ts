export const formatTimeAgo = (hoursAgo: number): string => {
  if (hoursAgo < 24) {
    return `enviado há ${hoursAgo} ${hoursAgo === 1 ? 'hora' : 'horas'}`;
  } else {
    const now = new Date();
    const date = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `enviado em ${day}/${month}/${year}`;
  }
};