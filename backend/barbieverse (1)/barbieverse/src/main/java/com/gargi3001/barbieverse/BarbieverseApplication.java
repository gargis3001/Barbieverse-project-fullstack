package com.gargi3001.barbieverse;

import org.springframework.boot.SpringApplication; //SpringApplication contains method run which is used to start the spring application
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

public class BarbieverseApplication {

	public static void main(String[] args) {
		SpringApplication.run(BarbieverseApplication.class, args);
	}


}
