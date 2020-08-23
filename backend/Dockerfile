FROM maven:3.6.3-jdk-8-slim AS MAVEN_BUILD

LABEL maintainer="Dhiego Gonçalves da Silva"

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM openjdk:8-jre-alpine

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/backend-0.0.1.jar /app/

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "backend-0.0.1.jar" ]