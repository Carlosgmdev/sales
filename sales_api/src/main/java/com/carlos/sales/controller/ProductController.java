package com.carlos.sales.controller;

import com.carlos.sales.domain.products.Product;
import com.carlos.sales.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/new")
    public ResponseEntity<Product> create(@RequestBody Product product) {
        return ResponseEntity.ok(productService.create(product));
    }

    @PostMapping("/new/many")
    public ResponseEntity<List<Product>> createMany(@RequestBody List<Product> products) {
        return ResponseEntity.ok(productService.create(products));
    }

    @GetMapping
    public ResponseEntity<List<Product>> all() {
        return ResponseEntity.ok(productService.all());
    }

}
