package com.example.todolist.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TodoListController {
    @RequestMapping("/")
    public String mainPage(){
        return "mainPage";
    }
}
