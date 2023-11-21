import {Text} from 'react-native';

export const TextComponent = ({
  category,
  title,
  fontColor,
}: {
  category: string;
  title: string;
  fontColor?: string;
}) => {
  switch (category) {
    case 'h1':
      return <Text style={{fontSize: 32, color: fontColor}}>{title}</Text>;
    case 'h1md':
      return (
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: fontColor,
          }}>
          {title}
        </Text>
      );
    case 'h2':
      return <Text style={{fontSize: 30, color: fontColor}}>{title}</Text>;
    case 'h2md':
      return (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: fontColor,
          }}>
          {title}
        </Text>
      );
    case 'p1':
      return <Text style={{fontSize: 16, color: fontColor}}>{title}</Text>;
    case 'p1md':
      return (
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: fontColor,
          }}>
          {title}
        </Text>
      );
    default:
      return <Text style={{fontSize: 16, color: fontColor}}>{title}</Text>;
  }
};
