package com.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class MainController {

    @GetMapping("/page1")
    public String getMenuPage1() {
        return "index";
    }
    @GetMapping("/page2")
    public String getMenuPage2() {
        return "index2";
    }
    @GetMapping("/page3")
    public String getMenuPage3() {
        return "index3";
    }
    @GetMapping("/reports")
    public String getReports() { return "index4"; }
    @GetMapping("/about")
    public String getAbout() {
        return "index5";
    }
    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }

}

