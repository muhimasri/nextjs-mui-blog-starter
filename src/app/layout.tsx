import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Header from "./components/Header";
import theme from "./styles/theme";
import globalStyles from "./styles/global";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <InitColorSchemeScript
            modeStorageKey="theme-mode"
            attribute="class"
          />
          <ThemeProvider modeStorageKey="theme-mode" theme={theme}>
            <CssBaseline />
            {globalStyles}
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
