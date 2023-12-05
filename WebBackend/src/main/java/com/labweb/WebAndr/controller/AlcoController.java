package com.labweb.WebAndr.controller;

import com.labweb.WebAndr.entity.AlcoEntity;
import com.labweb.WebAndr.repository.AlcoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alco")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class AlcoController {

    @Autowired
    private AlcoRepository alcoRepository;

    @PostMapping
    public ResponseEntity<AlcoEntity> createAlco(@RequestBody AlcoEntity alco) {
        AlcoEntity savedAlco = alcoRepository.save(alco);
        return new ResponseEntity<>(savedAlco, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AlcoEntity>> getAllAlco() {
        List<AlcoEntity> alcos = alcoRepository.findAll();
        return new ResponseEntity<>(alcos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AlcoEntity> getAlcoById(@PathVariable Long id) {
        Optional<AlcoEntity> alco = alcoRepository.findById(id);
        return alco.map(alcoEntity -> new ResponseEntity<>(alcoEntity, HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAlco(@PathVariable Long id) {
        if (alcoRepository.existsById(id)) {
            alcoRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<AlcoEntity> updateAlco(@PathVariable Long id, @RequestBody AlcoEntity alco) {
        if (alcoRepository.existsById(id)) {
            alco.setId(id);
            AlcoEntity savedAlco = alcoRepository.save(alco);
            return new ResponseEntity<>(savedAlco, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
