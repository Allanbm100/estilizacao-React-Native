import styled from 'styled-components/native'

export const theme = {
    colors: {
        primary: "#4A6FA5",
        secondary: "#6B8C42",
        background: "#FFF",
        text: "#333",
        textLight: "#666",
        textWhite: "#FFF",
        border: "#E0E0E0",
        statBackground: "#F8F9FA",
    },
    spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
    },
    radii: {
        sm: "8px",
        md: "12px",
        lg: "40px",
    }
}

export const Container = styled.View`
  margin-top: 50px;
  margin-left: ${theme.spacing.md};
  margin-right: ${theme.spacing.md};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.lg};
  padding: ${theme.spacing.md};
  elevation: 2;
`

export const ProfileHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: ${theme.radii.lg};
  border-width: 2px;
  border-color: ${theme.colors.border};
`

export const ProfileInfo = styled.View`
    margin-left: ${theme.spacing.md};
    flex: 1;
`

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.text};
    margin-bottom: 2px;
`

export const Title = styled.Text`
    font-size: 14px;
    color: ${theme.colors.primary};
    margin-bottom: 2px;
`

export const Location = styled.Text`
    font-size: 14px;
    color: ${theme.colors.textLight};
    margin-bottom: 2px;
`

export const Bio = styled.Text`
    font-size: 14px;
    line-height: 20px;
    color: ${theme.colors.text};
    margin-bottom: 20px;
    padding-bottom: ${theme.spacing.md};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.border};
`

export const StatsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const StatItem = styled.View`
    align-items: center;
    padding: ${theme.spacing.sm};
    background-color: ${theme.colors.statBackground};
    border-radius: ${theme.radii.sm};
    min-width: 80px;
    elevation: 2;
`

export const StatValue = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.primary};
`

export const StatLabel = styled.Text`
    font-size: 12px;
    color: ${theme.colors.textLight};
    margin-top: 4px;
`

export const ActionButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: ${theme.radii.sm};
  align-items: center;
`;

export const ActionButtonText = styled.Text`
    color: ${theme.colors.textWhite};
    font-weight: 500;
`