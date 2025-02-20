export function calculateDaysSinceDate(dateString: string): number {
  // Create date objects with consistent timezone (São Paulo)
  const targetDate = new Date(`${dateString}T00:00:00-03:00`);
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );

  const diffTime = Math.abs(today.getTime() - targetDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
