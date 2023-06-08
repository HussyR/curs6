package com.spring.payload.request;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;

public class TableOrderRequest {
    private Long id;

    @NotEmpty(message = "Пользователь не должен быть пустым")
    @Column(name = "usr")
    private String userName;

    @NotEmpty(message = "Количество человек не должно быть пустым")
    @Column(name = "numberOfPersons")
    private Integer numberOfPersons;

    @NotEmpty(message = "Время не должно быть пустым")
    @Column(name = "time")
    private String time;

    public TableOrderRequest() {
    }

    public TableOrderRequest(String userName, Integer numberOfPersons, String time) {
        this.userName = userName;
        this.numberOfPersons = numberOfPersons;
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getNumberOfPersons() {
        return numberOfPersons;
    }

    public void setNumberOfPersons(Integer numberOfPersons) {
        this.numberOfPersons = numberOfPersons;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
