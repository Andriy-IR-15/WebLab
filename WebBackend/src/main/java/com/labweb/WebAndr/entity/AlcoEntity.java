package com.labweb.WebAndr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class AlcoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String mark;
    private String name;
    private Integer price;
    private Integer volume;
    private Integer strength;
    private String country;
    private String image;

    public AlcoEntity(String brand, String mark, String name,
                      Integer price, Integer volume,
                      Integer strength, String country, String image) {
        this.brand = brand;
        this.mark = mark;
        this.name = name;
        this.price = price;
        this.volume = volume;
        this.strength = strength;
        this.country = country;
        this.image = image;
    }
}
