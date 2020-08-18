package com.project.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import lombok.RequiredArgsConstructor;

@SuppressWarnings("deprecation")
@Configuration
@EnableAuthorizationServer
@RequiredArgsConstructor
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    @Value("${security.jwt.signing-key}")
    private String signingKey;

    private final AuthenticationManager authenticationManager;

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        JwtAccessTokenConverter tokenConverter = new JwtAccessTokenConverter();
        tokenConverter.setSigningKey(signingKey);
        return tokenConverter;
    }

    @Bean
    public TokenStore tokenStore() {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.tokenStore(tokenStore()).accessTokenConverter(jwtAccessTokenConverter())
                .authenticationManager(authenticationManager);
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory().withClient("angular-app").secret("@e3edfae8204bc79f7bbd!85263609ee1c#")
                .scopes("read", "write").authorizedGrantTypes("password").accessTokenValiditySeconds(1800);
    }

}