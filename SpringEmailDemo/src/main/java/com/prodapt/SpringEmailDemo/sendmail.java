package com.prodapt.SpringEmailDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/email")
public class sendmail {
	
	@Autowired
    private EmailSenderService emailsenderService;
	
	
	@GetMapping("/send/{toEmail}/{subject}/{body}")   //
    public ResponseEntity<?> updateEmployee(@PathVariable String toEmail,@PathVariable String subject,@PathVariable String body){
		
		this.emailsenderService.sendSimpleEmail(toEmail, subject, body);
        return ResponseEntity.ok("Mail Sent............");
    }

}
