import styled from 'styled-components/native'

export const theme = {
    colors: {
        primary: "#4A6FA5",
        secondary: "#6B8C42",
        background: "#FFF",
        border: "#E0E0E0"
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
    background-color: ${theme.colors.background};
    border-radius: ${theme.radii.md};
    padding: ${theme.spacing.md};
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