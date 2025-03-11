export function generateUserCode(name: string, prefix: string = 'DRV'): string {
  // Ensure prefix is uppercase
  const formattedPrefix = prefix.toUpperCase();

  // Extract initials from the name (handle cases where name might be empty)
  const nameParts = name.trim().split(' ');
  const initials = nameParts.map((part) => part[0]?.toUpperCase()).join('');

  // Generate a random 4-digit number
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Combine prefix, initials, and random number
  const userCode = `${formattedPrefix}-${initials}-${randomNumber}`;

  return userCode;
}
